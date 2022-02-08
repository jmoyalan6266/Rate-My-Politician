export const numToString = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const parseElectionMargin = (margin) => {
    const party = margin > 0 ? "D" : "R";
    return `${Math.abs(margin * 100).toFixed(1)} ${party}`;
};

export const getHighlightedText = (text, highlight) => {
    // Split on highlight term and include term into parts, ignore case
    if (highlight) {
        const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
        return <span> { parts.map((part, i) => 
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {} }>
                { part }
            </span>)
        } </span>;
    } else {
        return text;
    }
};