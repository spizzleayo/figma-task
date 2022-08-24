import { useState } from "react";
import LabelComponent from "../label/Label";
import Input from "../input";
import {
  ProfileWrapper,
  PageWrapper,
  ProfileHeader,
  ProfileInfo,
  Receipt,
  ProfileInfoWrapper,
  ButtonWrapper,
  NextButton,
  CancelButton,
  AddressForm,
  State,
  ProfileForm,
  Local,
  Asterisk,
  CardFormWrapper,
  Detail,
  Expiry,
  CVV,
  BoxWrapper,
  Item,
  BoxHeader,
  Price,
  TextWrapper,
  TextA,
  TextB,
  TextC,
  TextD,
  TextWrap,
  Border,
  TotalBorder,
  Total,
  Value,
  PayButton,
  ActiveTabIndicator,
  PurchasedContainer,
  CheckBox,
  Icon,
  Check,
  PurchaseHeader,
  EmailDetails,
  ReturnButton,
} from "./Payment.style";

export default function Profile() {
  const tabs = {
    personalInfo: "personal-info",
    billingInfo: "billing-info",
    confirmPayment: "confirm-payment",
  };
  const [activeTab, setActiveTab] = useState(tabs.personalInfo);
  const isTabActive = (activeTab, tab) => activeTab === tab;
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return paymentCompleted ? (
    <PageWrapper>
      <ProfileWrapper>
        <PurchasedContainer>
          <Check>
            <CheckBox className="dot">
              <Icon />
            </CheckBox>
            <PurchaseHeader>Purchase Completed</PurchaseHeader>
            <EmailDetails>
              Please check your email for details concerning this transaction
            </EmailDetails>
            <ReturnButton>
              <a href="/">Return Home</a>
            </ReturnButton>
          </Check>
        </PurchasedContainer>
      </ProfileWrapper>
    </PageWrapper>
  ) : (
    <PageWrapper>
      <ProfileWrapper>
        <ProfileHeader>Complete your Purchase</ProfileHeader>
        <ProfileInfoWrapper>
          <ProfileInfo>
            {isTabActive(activeTab, tabs.personalInfo) && (
              <ActiveTabIndicator />
            )}
            Personal Info
          </ProfileInfo>
          <ProfileInfo>
            {isTabActive(activeTab, tabs.billingInfo) && <ActiveTabIndicator />}
            Billing Info
          </ProfileInfo>
          <ProfileInfo>
            {isTabActive(activeTab, tabs.confirmPayment) && (
              <ActiveTabIndicator />
            )}
            Confirm Payment
          </ProfileInfo>
        </ProfileInfoWrapper>

        {isTabActive(activeTab, tabs.personalInfo) && (
          <>
            <ProfileForm>
              <LabelComponent label="Name" />
              <Input
                placeholder="Opera Linus Ahmed"
                handleInputChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                value={form.name}
              />
              <LabelComponent label="Email Address" />
              <Asterisk>*</Asterisk>
              <Receipt>
                The purchase receipt would be sent to this address
              </Receipt>
              <Input
                placeholder="OperaLinusAhmed@devmail.com"
                handleInputChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                value={form.email}
              />
              <LabelComponent label="Address 1" />
              <Input
                placeholder="The address of the user goes here"
                handleInputChange={(e) => {
                  setForm({ ...form, address: e.target.value });
                }}
                value={form.address}
              />
              <LabelComponent label="Address 2" />
              <Input
                placeholder="and here"
                handleInputChange={(e) => {
                  setForm({ ...form, address2: e.target.value });
                }}
                value={form.address2}
              />
            </ProfileForm>

            <AddressForm>
              <Local>
                <LabelComponent label="Local Government" />
                <Input
                  placeholder="Surulere"
                  handleInputChange={(e) => {
                    setForm({ ...form, local: e.target.value });
                  }}
                  value={form.local}
                />
              </Local>
              <State>
                <LabelComponent label="State" />
                <Input
                  placeholder="Lagos"
                  handleInputChange={(e) => {
                    setForm({ ...form, state: e.target.value });
                  }}
                  value={form.state}
                />
              </State>
            </AddressForm>

            <ButtonWrapper>
              <NextButton
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("billing-info");
                }}
              >
                Next
              </NextButton>

              <CancelButton>
                <a href="/">Cancel Payment</a>
              </CancelButton>
            </ButtonWrapper>
          </>
        )}

        {isTabActive(activeTab, tabs.billingInfo) && (
          <>
            <ProfileForm>
              <LabelComponent label="Name on Card" />
              <Asterisk>*</Asterisk>
              <Input
                placeholder="Opera Linus Ahmed"
                handleInputChange={(e) => {
                  setForm({ ...form, card: e.target.value });
                }}
                value={form.card}
              />
              <LabelComponent label="Card Type" />
              <Asterisk>*</Asterisk>
              <Input
                placeholder="Visa"
                handleInputChange={(e) => {
                  setForm({ ...form, visa: e.target.value });
                }}
                value={form.visa}
              />
            </ProfileForm>

            <CardFormWrapper>
              <Detail>
                <LabelComponent label="Card details" />
                <Asterisk>*</Asterisk>
                <Input
                  placeholder="44960  44960  44960  44960"
                  type="value"
                  handleInputChange={(e) => {
                    setForm({ ...form, detail: e.target.value });
                  }}
                  value={form.detail}
                />
              </Detail>
              <Expiry>
                <LabelComponent label="Expiry date" />
                <Asterisk>*</Asterisk>
                <Input
                  placeholder="04 / 23"
                  type="value"
                  handleInputChange={(e) => {
                    setForm({ ...form, expiry: e.target.value });
                  }}
                  value={form.expiry}
                />
              </Expiry>
              <CVV>
                <LabelComponent label="CVV" />
                <Asterisk>*</Asterisk>
                <Input
                  placeholder="923"
                  type="value"
                  handleInputChange={(e) => {
                    setForm({ ...form, cvv: e.target.value });
                  }}
                  value={form.cvv}
                />
              </CVV>
            </CardFormWrapper>

            <ButtonWrapper>
              <NextButton
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("confirm-payment");
                }}
              >
                Next
              </NextButton>

              <CancelButton>
                <a href="/">Cancel Payment</a>
              </CancelButton>
            </ButtonWrapper>
          </>
        )}

        {isTabActive(activeTab, tabs.confirmPayment) && (
          <>
            <BoxWrapper>
              <BoxHeader>
                <Item>Item Name</Item>
                <Price> &#x20A6; Price</Price>
              </BoxHeader>
              <TextWrapper>
                <TextA>Data science and usability</TextA>
                <TextB>50,000.00</TextB>
              </TextWrapper>
              <TextWrap>
                <TextC>Shipping</TextC>
                <TextD>0.00</TextD>
              </TextWrap>

              <Border></Border>

              <TotalBorder>
                <Total>Total</Total>
                <Value>50,000.00</Value>
              </TotalBorder>
            </BoxWrapper>

            <ButtonWrapper>
              <PayButton
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("");
                  setPaymentCompleted(true);
                }}
              >
                Pay
              </PayButton>

              <CancelButton>
                <a href="">Cancel Payment</a>
              </CancelButton>
            </ButtonWrapper>
          </>
        )}
      </ProfileWrapper>
    </PageWrapper>
  );
}
