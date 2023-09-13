<div class="articulate-area">
<!--     <button onclick="speak('all')">Speak All</button>
    <button onclick="speak('intro')">Speak Intro</button>
    <button onclick="speak('speech')">Speak Speech</button>
    <button onclick="pause()">Pause</button>
    <button onclick="resume()">Resume</button> -->
    <button onclick="stop()"><i class="fa-solid fa-play"></i></button>
  </div>

  <script>
//     function speak(parentDivClass) {
//       $('.'+parentDivClass).articulate('speak', {
// 	    text: parentDivClass
//       });
//     }

// 	  function speak(obj) {
// 		   alert(obj);
// 	  $(obj).articulate('speak');
// 	}
	  
//     function pause() {
//       $('.articulate-area').articulate('pause');
//     }

//     function resume() {
//       $('.articulate-area').articulate('resume');
//     }

    function stop() {
      $('').articulate('stop');
    }

//     $('body').mouseup(function() {
//       var selectedText = window.getSelection().toString().trim();
//       if (selectedText !== '') {
		  //var parentDivClass = window.getSelection().focusNode.parentElement.closest('div').className;
// 		  const selObj = window.getSelection();
//   alert(selObj);
  //const selRange = selObj.getRangeAt(0);
// 		  const selRange = selObj.getRangeAt(0).endContainer.parentElement.classList[1];//.textContent;
// 		  .endContainer.parentElement.classList[1];
// console.log('selRange:', selRange);
// 		 speak(selRange);
//       }
//     });
  </script>

<script>
    // Function to speak the selected sentence using the SpeechSynthesis API
    function speakSelectedSentence(selectedText) {
        // Check if selected text exists
        if (selectedText !== '') {
            // Create a new SpeechSynthesisUtterance
            var utterance = new SpeechSynthesisUtterance(selectedText);

            // Use the SpeechSynthesis API to speak the text
            window.speechSynthesis.speak(utterance);
        }
    }

    // Function to get the entire sentence containing the selected text
    function getSelectedSentence() {
        var selection = window.getSelection();
        var selectedText = selection.toString().trim();

        if (selectedText !== '') {
            var range = selection.getRangeAt(0);
            var sentence = range.cloneContents().textContent;
            return sentence;
        }

        return '';
    }

    // Detect when text is selected (mouseup event)
    document.addEventListener('mouseup', function() {
        var selectedSentence = getSelectedSentence();
		console.log(selectedSentence);
        speakSelectedSentence(selectedSentence);
    });
</script>
