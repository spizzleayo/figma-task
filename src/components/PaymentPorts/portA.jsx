import React from 'react'
import LabelComponent from '../label/Label';
import Input from '../input';
import { Wrapper,
        ProfileInfo,
        ProfileHeader,
        ProfileWrapper, 
        ProfileInfoWrapper,
        ProfileFormWrapper,
        ProfileForm,
        Asterisk,
        DetailWrapper,
        ExpiryWrapper,
        CVVWrapper,
        ButtonWrapper,
        NextWrapper,
        CancelWrapper
     } from '../profile/profile.style'

export default function portA() {
  return (
    <Wrapper>

       <ProfileWrapper className="profile">
        <div className="profile-header">
            <ProfileHeader>Complete your Purchase</ProfileHeader>
        </div> 
        <ProfileInfoWrapper className="profile-info">
           <ProfileInfo>Personal Info</ProfileInfo>
           <ProfileInfo>Billing Info</ProfileInfo>
           <ProfileInfo>Confirm Payment</ProfileInfo>
        </ProfileInfoWrapper>
        </ProfileWrapper>
        <ProfileForm className="profile-form">
          <LabelComponent label="Name on Card" />
          <Asterisk>*</Asterisk> 
          <Input placeholder='Opera Linus Ahmed' />
          <LabelComponent label="Card Type"  />
          <Asterisk>*</Asterisk> 
          <Input placeholder='Visa' />
        </ProfileForm>

        <ProfileFormWrapper className="profile-form-wrapper">
          <DetailWrapper>
          <LabelComponent label="Card details" /> 
          <Asterisk>*</Asterisk>
          <Input placeholder='44960  44960  44960  44960' />
          </DetailWrapper>
          <ExpiryWrapper>
            <LabelComponent label="Expiry date" /> 
            <Asterisk>*</Asterisk>
          <Input placeholder='04 / 23' type='select' />
          </ExpiryWrapper>
          <CVVWrapper>
            <LabelComponent label="CVV" /> 
            <Asterisk>*</Asterisk>
          <Input placeholder='923' type='select' />
          </CVVWrapper>
        </ProfileFormWrapper>

        <ButtonWrapper className="button-wrapper">
          <NextWrapper>Next</NextWrapper>
          <CancelWrapper>Cancel Payment</CancelWrapper>
        </ButtonWrapper>



    </Wrapper>
  )
}
