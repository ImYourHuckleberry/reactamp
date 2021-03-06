import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

 const CLIENT = {
   sandbox:
     "AWeuDmR1wImKS-idPYnOq3ZBLn5ThCcP75pX8JQqk4J2gJ0UGFKs0uFD4dsdz8BZQEJI1PszZQQ780jo",
   production:
     "AWeuDmR1wImKS-idPYnOq3ZBLn5ThCcP75pX8JQqk4J2gJ0UGFKs0uFD4dsdz8BZQEJI1PszZQQ780jo"
 };

 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +this.props.name,
          amount: {
            currency_code: "USD",
            value: this.props.cost
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;
    const { name, cost} = this.props;

    return (
      <div className="main">

        {showButtons && (
          <div>
            <div>
              <h2>Total checkout Amount ${cost}</h2>
            </div>

            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {paid && (
          <div className="main">
            <h2>
              You Got Yo Self a {name}, Baby!!{" "}
              <span role="img" aria-label="emoji">
                {" "}
            
              </span>
            </h2>
          </div>
        )}
      </div>
    );
  }
}


 export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);