{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>       
ReactElement(object => HTML(browser understamds))
*/}
        
const parent = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]));
        


const heading =  React.createElement("h1", {id:"heading"}, "Namaste");
console.log(parent); //It will give an object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);