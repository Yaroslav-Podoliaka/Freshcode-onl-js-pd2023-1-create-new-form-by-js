"use strict";
const body = document.body;
const formByJs = document.createElement("form");
const h1 = document.createElement("h1");
h1.textContent = "CREATE AN ACCOUNT";
const p = document.createElement("p");
p.textContent = "We always keep your name and email address private.";
const divGlobalContainer = document.createElement("div");
divGlobalContainer.id = "container";
body.append(formByJs);
formByJs.append(h1, p, divGlobalContainer);

const divContainer1 = document.createElement("div");
divContainer1.className = "inputContainer1";
const inputName = document.createElement("input");
inputName.type = "text";
inputName.id = "name";
inputName.placeholder = "First name";
const inputLastName = document.createElement("input");
inputLastName.type = "text";
inputLastName.id = "lastName";
inputLastName.placeholder = "Last name";

const divContainer2 = document.createElement("div");
divContainer2.className = "inputContainer2";
const inputDisplayName = document.createElement("input");
inputDisplayName.type = "text";
inputDisplayName.id = "displayName";
inputDisplayName.placeholder = "Display name";
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.placeholder = "Email address";

const divContainer3 = document.createElement("div");
divContainer3.className = "inputContainer3";
const inputPassw = document.createElement("input");
inputPassw.type = "password";
inputPassw.id = "password";
inputPassw.placeholder = "Password";
const inputPasswConf = document.createElement("input");
inputPasswConf.type = "password";
inputPasswConf.id = "passwordConfirmation";
inputPasswConf.placeholder = "Password confirmation";

const divRadioContainer1 = document.createElement("div");
divRadioContainer1.className = "radioContainer1";
const divInnerContainer1 = document.createElement("div");
const inputBuyer = document.createElement("input");
inputBuyer.type = "radio";
inputBuyer.id = "buyer";
inputBuyer.name = "buyer";
const labelBuyer = document.createElement("label");
labelBuyer.setAttribute("for", "buyer");
labelBuyer.textContent = "Join As a Buyer";
const divInnerContainer2 = document.createElement("div");
const spanElement1 = document.createElement("span");
spanElement1.textContent =
  "I am looking for a Name, Logo or Tagline for my business, brand or product.";

const divRadioContainer2 = document.createElement("div");
divRadioContainer2.className = "radioContainer2";
const divInnerContainer3 = document.createElement("div");
const inputSeller = document.createElement("input");
inputSeller.type = "radio";
inputSeller.id = "seller";
inputSeller.name = "seller";
const labelSeller = document.createElement("label");
labelSeller.setAttribute("for", "seller");
labelSeller.textContent = "Join As a Creative or Marketplace Seller";
const divInnerContainer4 = document.createElement("div");
const spanElement2 = document.createElement("span");
spanElement2.textContent =
  "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace";

const divCheckContainer = document.createElement("div");
divCheckContainer.className = "checkContainer";
const inputCheckBox = document.createElement("input");
inputCheckBox.type = "checkbox";
inputCheckBox.id = "allowSend";
inputCheckBox.name = "allowSend";
const labelCheckBox = document.createElement("label");
labelCheckBox.setAttribute("for", "allowSend");
labelCheckBox.textContent =
  "Allow Squadhelp to send marketing/promotional offers from time to time";

const divBtnContainer = document.createElement("div");
divBtnContainer.className = "btnContainer";
const buttonSubmit = document.createElement("button");
buttonSubmit.type = "submit";
buttonSubmit.textContent = "Create account";

divGlobalContainer.append(
  divContainer1,
  divContainer2,
  divContainer3,
  divRadioContainer1,
  divRadioContainer2,
  divCheckContainer,
  divBtnContainer
);
divContainer1.append(inputName, inputLastName);
divContainer2.append(inputDisplayName, inputEmail);
divContainer3.append(inputPassw, inputPasswConf);
divRadioContainer1.append(divInnerContainer1, divInnerContainer2);
divInnerContainer1.append(inputBuyer, labelBuyer);
divInnerContainer2.append(spanElement1);
divRadioContainer2.append(divInnerContainer3, divInnerContainer4);
divInnerContainer3.append(inputSeller, labelSeller);
divInnerContainer4.append(spanElement2);
divCheckContainer.append(inputCheckBox, labelCheckBox);
divBtnContainer.append(buttonSubmit);
