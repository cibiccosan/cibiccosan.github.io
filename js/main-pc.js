window.onload = function(){

  var image = document.getElementById('image');

  // app_id, API_Key, API_Secretは自分のものに書き換えてください
  var milkcocoa = MilkCocoa.connectWithApiKey('juicej1k05nbr.mlkcca.com', 'AFLDGOANKJMBJFHM', 'UILVRKRaUEScekIIQFOZFSQQLiJOCmLkjDniSGfZ');
  var ds = milkcocoa.dataStore('gravity');

  ds.on('send', changeViewFromSentMode);

  function changeViewFromSentMode(sent){
    if(sent.value.mode === 'portrait'){
      image.className = '';
    }
    if(sent.value.mode === 'landscape'){
      image.className = 'is-landscape';
    }
  }
};