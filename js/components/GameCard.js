const createGameCard = (name, rating, tags) => {
    return `
                <div class="card">
                    <h3>${name}</h3>
                    <div class="card__icons">
                        <div class="rating">
                            <i class="fas fa-star"></i> ${rating}
                        </div>
                        <div class="tags">
                            <i class="fas fa-tags"></i> ${tags.length}
                        </div>
                    </div>
                </div>
            `;
}