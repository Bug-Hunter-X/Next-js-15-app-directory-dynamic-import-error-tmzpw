```javascript
// pages/index.js

import MyComponent from './MyComponent';

export default function Home() {
  return (
    <div>
      <MyComponent/>
    </div>
  );
}

//pages/MyComponent.js

export default function MyComponent(){
    return <div>Component Loaded Successfully!</div>
}
```