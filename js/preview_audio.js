document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('files').addEventListener('change',  handleFileSelect,false);
       function handleFileSelect(evt) {
     var files = evt.target.files; // FileList object
   
     // Loop through the FileList and render image files as thumbnails.
      for (var i = 0, f; f = files[i]; i++) {
   
     // Only process image files.
   
     if (f.type.match('audio.*')){
     var reader = new FileReader();
   
     // Closure to capture the file information.
     reader.onload = (function(theFile) {
       return function(e) {
         // Render thumbnail.
   
         var span = document.createElement('span');
   
       span.innerHTML = ['<audio controls><source src="', e.target.result,'   "type="audio/ogg"><source src="', e.target.result,' "type="audio/mpeg"></audio>'].join('');
         document.getElementById('list').insertBefore(span, null);
   
       };
     })(f);
   }
     // Read in the image file as a data URL.
     reader.readAsDataURL(f);
   }
     } }, false);