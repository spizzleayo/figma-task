import React from 'react'
import  Input from '../input'
import { ProfileWrapper, 
        Wrapper,
        ProfileHeader,
        ProfileInfo,
        ProfileInfoWrapper,
        BoxWrapper,
        BoxHeader,
        TextHeader,
        TextA,
        TextB,
        TextC,
        TextD, 
        TextWrap,
        TextWrapper,
        ProfileForm,
        NextWrapper,
        ButtonWrapper,
        CancelWrapper,     
 } from '../profile/profile.style'


export default function portB() {
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
    

    <BoxWrapper className='box-container'>
      <BoxHeader>
        <TextHeader>Item Name</TextHeader>
        <TextHeader>Price</TextHeader>
      </BoxHeader>
      <TextWrapper>
        <TextA>Data science and usability</TextA>
        <TextB>50,000.00</TextB>
      </TextWrapper>
      <TextWrap>
        <TextC>Shipping</TextC>
        <TextD>0.00</TextD>
      </TextWrap>

      <ProfileForm className="profile-form">
          <Input placeholder='Total 50,000.00' />
      </ProfileForm>  
    </BoxWrapper>

    <ButtonWrapper className="button-wrapper">
          <NextWrapper>Pay</NextWrapper>
          <CancelWrapper>Cancel Payment</CancelWrapper>
        </ButtonWrapper>
      </ProfileWrapper>
    </Wrapper>  
  )
}
