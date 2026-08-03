function analyzeKeyword() {
    const keyword = document.getElementById('keywordInput').value.trim();
    
    if (keyword === '') {
        alert('الرجاء إدخال كلمة مفتاحية!');
        return;
    }
    
    // محاكاة البيانات (بدون API حالياً)
    const fakeData = {
        volume: Math.floor(Math.random() * 10000) + 500,
        competition: ['منخفضة', 'متوسطة', 'عالية'][Math.floor(Math.random() * 3)],
        suggestions: [`${keyword} سعودي`, `${keyword} 2026`, `أفضل ${keyword}`, `${keyword} احترافي`]
    };
    
    // عرض النتائج
    document.getElementById('results').style.display = 'block';
    document.getElementById('searchVolume').querySelector('span').textContent = fakeData.volume;
    document.getElementById('competition').querySelector('span').textContent = fakeData.competition;
    document.getElementById('suggestions').querySelector('span').textContent = fakeData.suggestions.join('، ');
}