import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked - " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

     const handleLoClick = ()=> {
        console.log("Uppercase was clicked - " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text"; wrong way to change state
    // setText("new text")  correct way to change state
    return (
    <div>
    <form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="mb-3 form-check">
    <div class="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <textarea class="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
        </div>
        <button class="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button class="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.length} Characters and {text.split(" ").length} Words</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
    </div>
    )
}
