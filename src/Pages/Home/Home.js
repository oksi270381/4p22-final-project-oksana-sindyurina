import Head from '../../components/Header/Head/Head';
import Footer from '../../components/Footer/Footer';
import './Home.css';

function Home () {
    return (
        <>
            <Head></Head>
            <div className="Home">
                <img className="Home-img" src="https://sun1-30.userapi.com/c854028/v854028232/23b0c1/kcUQCAz05Vo.jpg" alt='foto'></img>
                <img className="Home-img" src="https://st.5tachok.ru/11/2267/070/1f25a28db83e5f890faca73542vi.jpg" alt='foto'></img>
                <img className="Home-img" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/6221/images/3MFPev7VSceo8EuEJMDt_iFashion_to_go_on_blogshop-shopping_spree_Digital_News_Asia.jpg" alt='foto'></img>
                <img className="Home-img" src="https://www.alltime.ru/obj/article/image-blog/Bazovyy_muzhskoy_garderob/Bazovyy_muzhskoy_garderob_1.jpg" alt='foto'></img>
                <img className="Home-img" src="https://design-homes.ru/images/galery/2436/khranenie-bez-shkafov_5f5d34e1a5534.jpg" alt='foto'></img>
                <img className="Home-img" src="https://otvet.imgsmail.ru/download/13083476_2ca63e9e7ee46195321a7984564379ca_800.jpg" alt='foto'></img>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Home;