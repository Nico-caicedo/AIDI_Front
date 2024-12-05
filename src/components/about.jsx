import Headers from "../Header"
import About1 from "../assets/about1.png"
function About() {
    return (
        <div className="h-screen w-screen ">
            <Headers />
            {/* container */}
            <div className="flex-col justify-items-center p-1 gap-4  w-full ">

                <div>
                 <p>
                    AIDI
                 </p>
                </div>

                <div className="w-9/12 flex justify-center p-1 items-center gap-4 bg-gray-300 w-full rounded">
                    <div className="felx-col gap-2">
                        <h1 className="text-4xl font-semibold text-gray-800">Sobre Nosotros</h1>
                        <p className="text-justify w-96" >La Academia  Iberoamericana de Idiomas AIDI, es una institución con más
                            de 20 años de experiencia. La cual brinda un programa de formación para el trabajo y
                            desarrollo humano en el área de inglés, que cree que el aprendizaje de inglés es una oportunidad para  que las personas se conecten con el mundo.</p>

                    </div>
                    <img src={About1} alt="" className="w-80 rounded" />
                </div>


                {/* <div>
                    <h1>Misión</h1>
                    <p>nuestra misión empresarial es contribuir al trabajo y desarrollo humano,

                        Proporcionando programas de inglés para adultos y niños, con convenios con instituciones educativas y empresas, ofreciendo un programa de inglés para adultos AEP de 4 niveles, y un programa para niños AIDI NIÑOS de 3 niveles; orientado a empresas interesadas en capacitar su personal en áreas de inglés, así como a colegios que deseen aportar al desarrollo del departamento. Nos esforzamos para ofrecer programas de calidad y con experiencias educativas únicas para nuestros alumnos,

                        Utilizando las últimas técnicas de enseñanza y conciencias del impacto.

                        positivo en su desarrollo profesional.</p>
                </div>


                <div>
                    <h1>

                    </h1>

                    <p>
                        La Academia Iberoamericana de Idiomas AIDI, ofrecerá formación en el idioma de inglés, la cual está basada en el Marco Europeo de Referencia (MCER) que va desde el nivel A1 hasta el B2 para adultos y niños, con herramientas necesarias para que puedan adquirir habilidades lingüísticas en este idioma. Para el año 2030 deseamos aumentar nuestro número de sedes en el departamento del Caquetá, mejorando la accesibilidad a estudiantes de zonas rulares, tenemos convenios nacionales e internacionales que permiten a nuestros estudiantes potencializar su aprendizaje y ampliar sus oportunidades laborales y académicas, contando con docentes capacitados y con un buen registro de nivel según los estándares internacionales, al igual se tiene el acompañamiento de personal nativo - extranjero asegurando así las mejores experiencias y aprendizajes para nuestros estudiantes.</p>
                </div> */}
            </div>

        </div>



    )
}


export default About


