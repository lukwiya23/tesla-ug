import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TESLA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
    <Body>
      <Header />
   
      <Section  title= "Model S"
        description= "Order Online for Touchless Delivery"
        Backgroundimg= "model-s.jpg"
        
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
       
      
      <Section  title= "Model Y"
        description= "Order Online for Touchless Delivery"
        Backgroundimg= "model-y.jpg"
        
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
    
      <Section  title= "Model 3"
        description= "Order Online for Touchless Delivery"
        Backgroundimg= "model-3.jpg"
        
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
   
      <Section  title= "Model X"
        description= "Order Online for Touchless Delivery"
        Backgroundimg= "model-x.jpg"
        
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
     
      <Section  title= "Lowest Cost Solar Panels In Uganda"
        description= "Money Back Guarantee"
        Backgroundimg= "solar-panel.jpg"
        
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />
     
      <Section  title= "Solar Roofs In Uganda"
        description= "Money Back Guarantee"
        Backgroundimg= "solar-roof.jpg"
        
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />
      <Section  title= "Accessories"
        description= "Money Back Guarantee"
        Backgroundimg= "accessories.jpg"
        
        leftBtnText="Shop Now"
        
        />

   </Body>
    </div>
  )
}

const Body = styled.div`

width: 100vw;

height: 100vh;
`

