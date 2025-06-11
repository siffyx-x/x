document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirmButton');
    // denyButtonとmessageDisplayはHTMLに存在しないので、ここでは不要ですが、
    // もし将来的に追加する可能性があるなら残しても構いません。
    // const denyButton = document.getElementById('denyButton');
    // const messageDisplay = document.getElementById('message');

    // 「はい」ボタンがクリックされた時の処理
    confirmButton.addEventListener('click', () => {
        // ここを 'royal.html' に修正
        const nextPageUrl = 'royal.html';
        window.location.href = nextPageUrl;
    });
});
