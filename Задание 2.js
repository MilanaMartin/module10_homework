function WhatIsX(x) {
  var type = typeof (x)
  switch (type) {
    case 'number':
      console.log('x-число')
      break;
    case 'string':
      console.log('x-это строка')
      break;
    case 'boolean':
      console.log('x-логический тип')
      break;
  }
}

WhatIsX(11);
WhatIsX(true);
WhatIsX("shshshsh");