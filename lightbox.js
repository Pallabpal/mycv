const lightbox= document.querySelector(".lightbox")
const Closebutton= document.querySelector(".uil-times");

const content=[
      {
        id:1,
        title:"Health Insurance Fraud Detection",
        image:"https://healthpayerintelligence.com/images/site/article_headers/_normal/ThinkstockPhotos-520327864.jpg",
        desc:{
          statement:"This project contains a Python implementation of a <span class='custom-color'>Random Forest Classifier</span> for detecting health insurance fraud in a given dataset. The Random Forest algorithm is utilized in combination with sampling techniques to address the challenge of <span class='custom-color'>imbalanced data</span>. The dataset undergoes preprocessing, including the application of one-hot encoding. The model is developed with 15 and 100 estimators for comparison.",
          methodology:'Before training the model, the dataset undergoes preprocessing steps, including <span class="custom-color">one-hot encoding</span>. One-hot encoding is applied to categorical' +
          ' features to convert them into numerical representation,enabling the classifier to handle them effectively during training.' +' The Random Forest Classifier is developed with an <span class="custom-color">estimator value of 15 and 100</span> . This configuration has been found to provide a good balance between model complexity and performance.',
          conclusion:"This project demonstrates the implementation of a Random Forest Classifier for health insurance fraud detection. By utilizing sampling techniques and data preprocessing, the classifier can effectively learn from the provided dataset and make accurate predictions.",

        },
        gitlink:"https://github.com/Pallabpal/Health-Insurance-Fraud-Detection",
        background:"#F3F2EF"

      },
      {
        id:2,
        title:"Market Segmentation Analysis of Electric Vehicle Market in India",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtkBIwwryhWas_MKj9MqXsOoxqMMJky8iMw&usqp=CAU",
        desc:{
          statement:"The objective of this project is to conduct a comprehensive <span class='custom-color'>market</span>"+
          "<span class='custom-color'>analysis</span> for the electric vehicle (EV) industry in India, focusing on geographic,"+
          " demographic, and behavioral segments. The goal is to identify opportunities and challenges for"+
          "establishing and <span class='custom-color'>growing an EV startup</span> in the Indian market.",
          methodology:"To analyze the data and derive meaningful insights, we employed"+
          "various techniques and algorithms, including <span class='custom-color'>Machine Learning</span>. The following"+
           "libraries were utilized: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SciPy,"+
           "Principal Component Analysis, and <span class='custom-color'>K-Means Clustering</span>. These methodologies allowed us"+ 
           "to uncover patterns, trends, and relationships within the data, enabling a deeper understanding"+ 
           "of the Indian EV market.",
          conclusion:"Through our comprehensive market analysis, we have successfully identified distinct <span class='custom-color'>market segments</span> within the Indian EV industry, each with unique preferences and priorities. These segments include cost-conscious consumers seeking affordable options, as well as early adopters who prioritize advanced technology and performance. Understanding these segments will allow businesses to refine their market segmentation strategies and <span class='custom-color'>effectively target and cater to the specific needs of each segment</span>."
          
        
      },
      gitlink:"https://github.com/Pallabpal/Ev-market",
      background:"#F3F2EF"
    },
      {
        id:3,
        title:"AI Prototype in Health Insurance",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbOj9Ib5jAEtH8wBLri2sofNTjf3bUJYasQ&usqp=CAU",
        desc:{
          statement:"Prototype idea of AI in Health Insurance Companies which would utilize artificial intelligence and natural language processing capabilities to determine whether the health insurance claim is guaranteed or not based on fraud detection.",
           methodology:"This AI product is dedicated to processing <span class='custom-color'>health insurance claims</span>. It incorporates a chatbot powered by <span class='custom-color'>natural language processing</span> techniques to promptly gather data from users. <br/>  The 24x7 chatbot provides round-the-clock-support, allowing policyholders to get assistance whenever they need it. It efficiently collects, and analyzes the data such as medical reports provided by individuals to determine the eligibility of the health insurance policy, which reduces the need for human agents to handle routine claim inquiries. Its primary function is to swiftly detect <span class='custom-color'>potential fraud</span> within the submitted data and provide <span class='custom-color'>real-time feedback.</span>"
           ,
           conclusion:"The AI prototype selection project has successfully completed <span class='custom-color'>financial modeling</span>, <span class='custom-color'>concept development</span>, <span class='custom-color'>business model monetization</span>, <span class='custom-color'>subscription model implementation</span>, and <span class='custom-color'>web integration</span> ."
        },
        gitlink:"https://github.com/Pallabpal/AI_prototype_Health_insurance",
        background:"#F3F2EF"
      }

]
const showlightbox =(value)=>{
  const h3tag=document.querySelectorAll(".content h3");
  const wrapper=document.querySelector(".wrapper")
  const title=content[value].title;
  const imagevalue=content[value].image;
  const statement =content[value].desc.statement;
  const methodology =content[value].desc.methodology;
  const conclusion =content[value].desc.conclusion;
  const gitlink=content[value].gitlink;
  lightbox.querySelector(".photographer h2").innerHTML=title;
  lightbox.querySelector("img").src=imagevalue;
  lightbox.querySelector(".desc-section a").href=gitlink;
  const arr=lightbox.querySelectorAll(".content p");
  if(title==="AI Prototype in Health Insurance")
  {
    h3tag[0].innerHTML="About Prototype"
    h3tag[1].innerHTML="Selection"
    h3tag[2].innerHTML="Key-points"
    arr[0].innerHTML=statement;
    arr[1].innerHTML=methodology;
    arr[2].innerHTML=conclusion;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","pdfdesc")
    newDiv.innerHTML = `
    <span>For details:</span>
    <a class="pdflink" href="https://www.google.com">Pdf of this project</a>
    `;
    const describeSection=document.querySelector(".desc-section")
    wrapper.style.background=content[value].background;
    describeSection.appendChild(newDiv);
    lightbox.classList.add("show");
    document.body.style.overflow="hidden";
    
  }
  else{
    h3tag[0].innerHTML="Problem Statement"
    h3tag[1].innerHTML="Methodology"
    h3tag[2].innerHTML="Conclusion"
    arr[0].innerHTML=statement;
    arr[1].innerHTML=methodology;
    arr[2].innerHTML=conclusion;
    wrapper.style.background=content[value].background;
    const pdfdesc=document.querySelector("#pdfdesc");
    if(pdfdesc){
      pdfdesc.innerHTML="";
    }
    
  }
  
  lightbox.classList.add("show");
  document.body.style.overflow="hidden";
  
  
}


const hidelightBox = ()=>{
  lightbox.classList.remove("show");
  document.body.style.overflow="auto";
}
Closebutton.addEventListener("click", hidelightBox);