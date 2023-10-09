import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ListTemplate from "./ListTemplate";
import books from "./books";
import MyHello from "./MyHello";
import StateBasic from "./StateBasic";
import StateParent from "./StateParent";
import EventMouse from "./EventMouse";
import EventCompare from "./EventCompare";
import EventError from "./EventError";
import EventObj from "./EventObj";
import EventPoint from "./EventPoint";
import EventKey from "./EventKey";
import EventArgs from "./EventArgs";
import EventPropagation from "./EventPropagation";
import EventOnce from "./EventOnce";
import StateForm from "./StateForm";
import StateFormUC from "./StateFormUC";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";
import FormRadio from "./FormRadio";
import FormCheck from "./FormCheck";
import FormCheckMulti from "./FormCheckMulti";
import FormFile from "./FormFile";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// setInterval(() => {
//     root.render(
//         <p>現在時刻: {(new Date()).toLocaleString()}</p>
//     );
// }, 1000);

// root.render(
//     <ListTemplate src={books}>
//         {elem => (
//             <>
//                 <dt>
//                     <p>{elem.title} ({elem.price})円</p>
//                 </dt>
//                 <dd>{elem.summary}</dd>
//             </>
//         )}
//     </ListTemplate>
// )

root.render(
  <FormFile />
);

reportWebVitals();
