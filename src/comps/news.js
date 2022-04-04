import News from './news/newsStyle';
const news = () => {
    return <News>
        <div className="centralnews">Noticia central
                <p>Light Yagami encuentra la Death Note en una mañana invernal del año 2004. El joven ahora posee la facultad de decidir por la vida de casi todos los seres humanos en la Tierra, y con ello puede eliminar a los criminales del mundo, con el objetivo de construir un mundo ideal, donde unicamente los que él considere beatos y virtuosos puedan vivir.</p>
        </div>
            <div className="secnews1">Noticia secundaria1</div>
            <div className="secnews2">Noticia secundaria2</div>
            <div className="secnews3">Noticia secundaria3</div>
    </News>;
}

export default news;