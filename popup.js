document.getElementById('submit').addEventListener('click', () => {
    prompt = "Summarize the following terms and conditions: "
    prompt = document.getElementById('prompt').value;
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 150
        })
    })
        .then(response => response.json())
        .then(data => {
            const responseElement = document.getElementById('response');
            responseElement.innerText = data.choices[0].text.trim();
        })
        .catch(error => console.error('Error:', error));
});
