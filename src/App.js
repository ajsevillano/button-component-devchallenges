import './App.css';
import Button from './components/Button/Index';

function App() {
  const buttonHeaders = {
    default: 'Default',
    outline: 'Variant outline',
    text: 'Variant text',
    disableshadow: 'Disable shadow',
    disabled: 'Default(disabled)',
    textDisabled: 'Variant text(disabled)',
  };

  return (
    <div className="App">
      <div className="button-container" id="default-button">
        <p>{buttonHeaders.default}</p>
        <Button variant="default" />
      </div>
      <div className="button-container" id="outline-button">
        <p>{buttonHeaders.outline}</p>
        <Button variant="outline" />
      </div>
      <div className="button-container" id="text-button">
        <p>{buttonHeaders.text}</p>
        <Button variant="text" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.disableshadow}</p>
        <Button variant="disableShadow" />
      </div>
      <div className="button-container" id="disabled-button">
        <p>{buttonHeaders.disabled}</p>
        <Button variant="default" disabled={true} />
      </div>
      <div className="button-container" id="disabled-button">
        <p>{buttonHeaders.textDisabled}</p>
        <Button variant="text" disabled={true} />
      </div>
    </div>
  );
}

export default App;
