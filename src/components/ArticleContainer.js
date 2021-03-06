
const ArticleContainer = ({
    children,
    title,
    summary,
    id
}) => {
    const hasChild = children != null;
    return (
        <article className="w3-content w3-container w3-padding-64" id={id}>
            <h3 className="w3-center">{title}</h3>
            <p className="w3-center"><em>{summary}</em></p>
            { hasChild && children}
        </article>
    );
}

export default ArticleContainer;