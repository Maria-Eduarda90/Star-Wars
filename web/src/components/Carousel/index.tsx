import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import imgDartVader from '../../images/personagens/dart-vader.png';
import imgLeia from '../../images/personagens/leia.png';
import imgLukeSkywalker from '../../images/personagens/luke-skywalker.png';
import imgObiWanKenobi from '../../images/personagens/obi-wan-kenobi.png';
import imgHanSolo from '../../images/personagens/han-solo.png';
import imgChewbacca from '../../images/personagens/chewbacca.png';
import imgR2D2 from '../../images/personagens/r2d2.png';
import imgC3PO from '../../images/personagens/c-3po.png';
import imgYODA from '../../images/personagens/Master-yoda.png';
import imgMaceWindu from '../../images/personagens/mace-windu.png';
import imgStormtrooper from '../../images/personagens/stormtrooper.png';

import 'swiper/css';
import 'swiper/css/navigation';

export function Carousel(){
    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={20}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
                500: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 4,
                },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            >
            <SwiperSlide>
                <div className={styles.containerDartVader}>
                    <img src={imgDartVader} alt="dart vader" />
                    <h1>DART VADER</h1>
                    <p>
                        Darth Vader é um dos personagens centrais da série de filmes Star Wars, tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel, um dos antagonistas principais da trilogia
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerLeia}>
                    <img src={imgLeia} alt="leia" />
                    <h1>LEIA ORGANA</h1>
                    <p>
                        Princesa Leia Organa ou General Leia Organa é uma personagem fictícia da série de filmes Star Wars que foi interpretada por Carrie Fisher nos filmes Star Wars
                    </p>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className={styles.containerLukeSkywalker}>
                    <img src={imgLukeSkywalker} alt="luke skywalker" />
                    <h1>LUKE SKYWALKER</h1>
                    <p>
                        Luke Skywalker é o protagonista da trilogia original da série Star Wars, faz participação em Star Wars: O Despertar da Força em Star Wars: Os Últimos Jedi. É interpretado pelo ator norte-americano Mark Hamill
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerObiWanKenobi}>
                    <img src={imgObiWanKenobi} alt="obi wan kenobi" />
                    <h1>OBI-WAN-KENOBI</h1>
                    <p>
                        Obi-Wan Kenobi é um personagem da série Star Wars, tendo participado dos seis primeiros filmes. Na trilogia original, foi interpretado por Sir Alec Guiness e nos outros três por Ewan McGregor, que interpretou a versão jovem do personagem.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerHanSolo}>
                    <img src={imgHanSolo} alt="han solo" />
                    <h1>HAN SOLO</h1>
                    <p>
                        Han Solo é um personagem fictício, um dos protagonistas dos livros e filmes de ficção científica da série Star Wars. No cinema, Han Solo foi interpretado pelo ator Harrison Ford.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerChewbacca}>
                    <img src={imgChewbacca} alt="Chewbacca" />
                    <h1>CHEWBACCA</h1>
                    <p>
                        Na série Star Wars, Chewbacca — apelido: Chewie — é o copiloto da nave Millennium Falcon e o melhor amigo de Han Solo, e um alienígena da raça Wookiee, oriundo do planeta Kashyyyk.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerR2D2}>
                    <img src={imgR2D2} alt="R2D2" />
                    <h1>R2-D2</h1>
                    <p>
                        R2-D2 é um pequeno robô e um dos principais personagens da saga Star Wars. Ele é um droide astromecânico, responsável por manutenção e navegação de astronaves.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerC3P0}>
                    <img src={imgC3PO} alt="c-3PO" />
                    <h1>C-3PO</h1>
                    <p>
                        O C-3PO é um androide do mundo fictício de Star Wars. É um "droide de protocolo" fluente em 6 milhões de meios de comunicação. Foi inspirado na robô Maschinenmensch de Metrópolis.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerYODA}>
                    <img src={imgYODA} alt="yoda" />
                    <h1>YODA</h1>
                    <p>
                        Yoda é um personagem fictício no universo de Star Wars, criado por George Lucas. Ele aparece em seis filmes da saga, todos os filmes da trilogia prequela e da original
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerMaceWindu}>
                    <img src={imgMaceWindu} alt="Mace Windu" />
                    <h1>MACE WINDU</h1>
                    <p>
                        Mace Windu é um personagem fictício da franquia Star Wars. Windu foi interpretado por Samuel L. Jackson na trilogia prequela.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerStormtrooper}>
                    <img src={imgStormtrooper} alt="Stormtrooper" />
                    <h1>STORMTROOPER</h1>
                    <p>
                        Os Stormtroopers são a tropa de base do Império Galáctico no universo Star Wars. Devido à extensão do Império existem variações para diferentes terrenos e situações.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}