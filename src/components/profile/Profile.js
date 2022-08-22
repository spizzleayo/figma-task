import React from 'react';
import LabelComponent from '../label/Label';
import Input from '../input';
import { ProfileWrapper, 
         Wrapper,
         ProfileHeader, 
         ProfileInfo, 
         Receipt,
         ProfileInfoWrapper, 
         ProfileFormWrapper, 
         ButtonWrapper,
         NextWrapper,
         CancelWrapper,
         StateWrapper,
         ProfileForm, 
         LocalWrapper,
         Asterisk} 
  from './profile.style'

export default function Profile() {
  
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

        <ProfileForm className="profile-form">
          <LabelComponent label="Name" /> 
          <Input placeholder='Opera Linus Ahmed' />
          <LabelComponent label="Email Address"  />
          <Asterisk>*</Asterisk> 
          <Receipt>The purchase receipt would be sent to this address</Receipt>
          <Input placeholder='OperaLinusAhmed@devmail.com' />
          <LabelComponent label="Address 1" /> 
          <Input placeholder='The address of the user goes here' />
          <LabelComponent label="Address 2" /> 
          <Input placeholder='and here' />
        </ProfileForm>

        <ProfileFormWrapper className="profile-form-wrapper">
          <LocalWrapper>
          <LabelComponent label="Local Government" /> 
          <Input placeholder='Surulere' />
          </LocalWrapper>
          <StateWrapper>
            <LabelComponent label="State" /> 
          <Input placeholder='Lagos' type='select' />
          </StateWrapper>
        </ProfileFormWrapper>

        <ButtonWrapper className="button-wrapper">
          <NextWrapper>Next</NextWrapper>
          <CancelWrapper>Cancel Payment</CancelWrapper>
        </ButtonWrapper>

    </ProfileWrapper>

    </Wrapper>
  )
}







