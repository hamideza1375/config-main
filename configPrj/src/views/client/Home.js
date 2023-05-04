import { useRef, forwardRef, useImperativeHandle } from "react";
import { Column, P } from "../../other/Components/Html";
import { TextInput } from "react-native";

let BootstrapInput = forwardRef((p, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      p.$.id('p').$({innerHTML:Math.floor(Math.random() * 1000)})
    },
  }));
  return <TextInput style={{height:50, width:200, borderWidth:1}} ref={ref} {...p} />;
});




const ChildOffers = (p) => {
  const inputRef = useRef(null);
  const handleFocus = () => {inputRef.current.focus()}

  return (
    <Column>
      <BootstrapInput onChange={handleFocus} type="text" className="form-control" ref={inputRef} {...p} />
      <P id='p' >salammm</P>
    </Column>
  );
};

export default ChildOffers;
// a