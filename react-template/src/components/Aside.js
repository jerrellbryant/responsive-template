import {useContext} from 'react';
import {ThemeContext} from '../components/themeContext';

const Aside = () => {
    const {data} = useContext(ThemeContext)

    return (
        <>
        <aside className="sidebar">
            <div className="sidebar-widget">
                <h2 className="widget-title">{data.widget && data.widget.title}</h2>
                <img className="widget-image" src={data.widget && data.widget.image} alt={data.widget && data.widget.alt}/>
                <p className="widget-body">{data.widget && data.widget.body}</p>

                <div className="sidebar-widget">
                    <h3 className="widget-recent-post-title">{data.widget && data.widget.subtitle}</h3>
                    
                    <div className="widget-recent-post">
                        <h3 class="widget-recent-post-title">{data.widgetpost1 && data.widgetpost1.title}</h3>
                        <img className="widget-image" src={data.widgetpost1 && data.widgetpost1.image} alt={data.widgetpost1 && data.widgetpost1.alt}/>
                    </div>

                     <hr></hr>

                    <div className="widget-recent-post">
                        <h3 class="widget-recent-post-title">{data.widgetpost2 && data.widgetpost2.title}</h3>
                        <img className="widget-image" src={data.widgetpost2 && data.widgetpost2.image} alt={data.widgetpost2 && data.widgetpost2.alt}/>
                    </div>

                    <hr></hr>

                    <div className="widget-recent-post">
                        <h3 class="widget-recent-post-title">{data.widgetpost3 && data.widgetpost3.title}</h3>
                        <img className="widget-image" src={data.widgetpost3 && data.widgetpost3.image} alt={data.widgetpost3 && data.widgetpost3.alt}/>
                    </div>

                </div>
            </div>
        </aside>
        </>
    )
}

export default Aside