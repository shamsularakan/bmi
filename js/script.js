document.querySelector('button').addEventListener('click',function(){
  //console.log('show');
  let height = document.querySelector('#height-input').value;
  let weight = document.querySelector('#weight-input').value;
  let bmi = weight / ((height/100)*height/100)
  document.querySelector('.bmi').innerHTML = bmi.toFixed(2);
  let bmiMark = document.querySelector('.bmi-mark')
  //console.log(height , weight);
  let bmiCategory = 'الوزن ناقص'
  let crdHdr= document.querySelector('header');


  if(bmi<=18.5){
    bmiCategory =  'الوزن ناقص';
    //bmiMark.setAttribute('style','background-color:#fabf23;')
    crdHdr.setAttribute('style','background-color:#fabf23; color:#101010;')
  }else if(bmi>18 && bmi<24.9){
    bmiCategory =  'الوزن طبيعي';
    //bmiMark.setAttribute('style','background-color:#5b8c5a;')
    crdHdr.setAttribute('style','background-color:#5b8c5a; color:#FFF;')
  }else if(bmi>25 && bmi<29.9){
    bmiCategory =  'الوزن زائد';
    //bmiMark.setAttribute('style','background-color:#db8e4e;')
    crdHdr.setAttribute('style','background-color:#db8e4e; color:#FFF;')
  }else if(bmi>30 && bmi<34.9){
    bmiCategory = 'السمنة من الدرجة الأولى';
    //bmiMark.setAttribute('style','background-color:#9c0719;')
    crdHdr.setAttribute('style','background-color:#9c0719; color:#FFF;')
  }else if(bmi>35 && bmi<39.9){
    bmiCategory = 'السمنة من الدرجة الثانية';
    //bmiMark.setAttribute('style','background-color:#861e2e;')
    crdHdr.setAttribute('style','background-color:#861e2e; color:#FFF;')


  }else {
     bmiCategory = 'السمنة المفرطة';
     //bmiMark.setAttribute('style','background-color:#4f0837;')
     crdHdr.setAttribute('style','background-color:#4f0837; color:#FFF;')

  }
    document.querySelector('.bmi-category').innerHTML = bmiCategory;
})
