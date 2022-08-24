import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const ProfileWrapper = styled.div`
  @media (min-width: 768px) {
    width: 600px;
    margin: auto;
  }

  @media (max-width: 450px) {
    width: 320px;
    margin: auto;
  }

  @media (max-width: 320px) {
    width: 285px;
    margin: auto;
  }
`;

export const PageWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(242, 201, 76, 0.2) 0%,
    rgba(242, 153, 74, 0.2) 100%
  );
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
`;

export const Asterisk = styled.span`
  color: red;
  padding: 7px;
`;

export const Receipt = styled.div`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #817e9e;
`;

export const ProfileHeader = styled.div`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #4e598c;
`;

export const ProfileInfo = styled.h3`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #bdbdbd;
  position: relative;
  margin: 0;
  padding: 20px 0;
`;

export const ProfileForm = styled.div`
  margin-top: 20px;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  border-bottom: 2px solid;
`;
export const CardFormWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  justify-content: space-between;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: inline-block;
  }
`;

export const AddressForm = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

export const Local = styled.div`
  width: 65%;
`;

export const State = styled.div`
  width: 30%;
`;

export const NextButton = styled.button`
  width: 238px;
  height: 58px;
  background: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
  border-radius: 10px;
  text-align: center;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #f7f7ff;
  border: none;
  text-decoration: none;
`;

export const PayButton = styled.button`
  width: 238px;
  height: 66px;
  background: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
  border-radius: 10px;
  text-align: center;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #f7f7ff;
  border: none;
`;

export const CancelButton = styled.button`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #4e598c;
  margin-right: 100px;
  text-align: center;
  border: none;
  margin: auto;
  text-decoration: none;
  color: linear-gradient(180deg #4e598c 0%, #4e598c 100%);
  border: none;
  background: linear-gradient(180deg, #4e598c 0%, #4e598c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Detail = styled.span`
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: inline-block;
  }
`;

export const Expiry = styled.span`
  width: 30%;
  @media screen and (max-width: 600px) {
    width: 50%;
    display: inline-block;
  }
`;

export const CVV = styled.span`
  width: 10%;
  @media screen and (max-width: 600px) {
    width: 40%;
    display: inline-block;
    margin-left: 10%;
  }
`;

export const BoxWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  width: 100%;
  margin-top: 40px;
  padding: 1px;
`;
export const BoxHeader = styled.div`
  background: #2f80ed;
  border-radius: 16px 10px 0px 0px;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  width: 100px;
  height: 30px;
  color: #ffffff;
  margin: auto;
`;
export const Price = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin: auto;
`;

export const TextA = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #4e598c;
  margin-left: 40px;
`;
export const TextB = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #4e598c;
  margin-right: 35px;
`;

export const TextC = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #4e598c;
  margin-left: 40px;
`;
export const TextD = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin-right: 35px;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const Border = styled.div`
  border-bottom: 2px solid;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
`;
export const TotalBorder = styled.div`
  margin-top: 39px;
  margin-bottom: 41px;
  margin-left: 20px;
  background: #ffffff;
  border: 1px solid #817e9e;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  height: 58px;
`;
export const Total = styled.div`
  margin-left: 21px;
  margin-top: 14px;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #817e9e;
`;
export const Value = styled.div`
  margin-right: 15px;

  height: 30px;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #4e598c;
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const PurchasedContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CheckBox = styled.div`
  width: 84px;
  height: 84px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.div`
  @media screen and (min-width: 760px) {
    margin: 0px;
    padding: 16px;
  }
  @media screen and (min-width: 320px) {
    margin: 70px;
  }
`;

export const Icon = styled(FaCheck)`
  width: 47.1px;
  height: 33.98px;
  color: green;
`;

export const PurchaseHeader = styled.div`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 67px;
  color: #4e598c;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;
export const EmailDetails = styled.div`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #4f4f4f;
  height: 60px;
`;
export const ReturnButton = styled.button`
  height: 30px;
  margin-top: 38px;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-decoration-line: underline;
  color: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
  border: none;
  background: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (min-width: 320px) {
    margin-top: 115px;
  }
`;

export const ActiveTabIndicator = styled.div`
  width: 100%;
  border: solid orange 5px;
  border-radius: 10px;
  position: absolute;
  bottom: -6px;
`;
