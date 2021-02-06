const createError = (message, error) => {
    return `
            <div class="error">
                <p>${message}</p>
                <span class="seperator"></span>
                <p>More details:</p>
                <span class="errorMessage">${error}</span>
            </div>
        `;
}