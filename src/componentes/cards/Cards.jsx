// import './Cards.css'
// // import CAPITULO from '../../assets/images/CAPITULO.png'
// import { Card } from '../card/Card'

// export const Cards = () => {
//   return (
//     <>
//     <div className="container">
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//      </div>

//      <div className="container">
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//      </div>

//      <div className="container">
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//      </div>
    
//     </>
//   )
// }


import './Cards.css';
import { Card } from '../card/Card';

 

export const Cards = () => {
  
  const cardsPerRow = 12;
 
  
  const cardElements = [...Array(cardsPerRow)].map((_, index) => (
<Card key={index} />
  ));

   return (
<div className="container">
<div className="card-grid">
        {cardElements}
</div>
</div>
  );
};