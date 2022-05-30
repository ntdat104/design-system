import Button from 'components/Button';
import React from 'react';

interface Props {}

const App: React.FC<Props> = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <Button>{`Test`}</Button>
    </div>
  );
};

export default App;
