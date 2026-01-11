function choose(option) {
    let result = document.getElementById("result");
  
    if (option === 'B') {
      result.textContent = "✅ Correct. Understanding the problem first avoids wrong work.";
      result.style.color = "green";
    } else if (option === 'A') {
      result.textContent = "❌ Risky. Building without clarity can waste time.";
      result.style.color = "red";
    } else {
      result.textContent = "⚠️ Waiting too long can delay progress.";
      result.style.color = "orange";
    }
  }
  