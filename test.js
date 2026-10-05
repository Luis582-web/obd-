const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.split('<script type="module">')[1].split('</script>')[0];
let script = 'const window = { innerWidth: 1000, innerHeight: 1000, devicePixelRatio: 1, addEventListener: ()=>{} }; const document = { createElement: ()=>({ className: "", style: {}, appendChild:()=>{}, getBoundingClientRect: ()=>({width:10, height:10}) }), getElementById: ()=>({ appendChild: ()=>{}, style: {}, classList: {add:()=>{}, remove:()=>{}}, addEventListener: ()=>{} }), querySelector: ()=>({ click: ()=>{} }), querySelectorAll: ()=>({ forEach: (cb) => { cb({onclick:null, classList:{remove:()=>{}}, dataset:{tab:""}}); } }) }; const navigator = { serial: null }; (async () => {' + scriptMatch + '})();';
try {
  eval(script);
  console.log('EVAL SUCCESS');
} catch(e) {
  console.error('EVAL ERROR:', e);
}
