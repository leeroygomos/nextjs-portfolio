import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


export default function particles(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a11",
                    },
                },
                fpsLimit: 170,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        grab: {
                            distance: 200,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "images",
                        // change type to images and uncomment below for dinosaurs
                        images: [
                            {
                                src: "https://images.vexels.com/media/users/3/196998/isolated/preview/3421fa2cd778f85dfc33c72728b57d1e-tyrannosaurus-dino-cute.png",
                            },
                            {
                                src: "https://static.vecteezy.com/system/resources/previews/009/378/085/original/cute-cartoon-dinosaur-character-free-png.png"
                            },
                            {
                                src: "https://images.vexels.com/media/users/3/196714/isolated/preview/f672a7151e95e139dddd9fad47b64b92-dino-brachisaurus-cute.png"
                            },
                            {
                                src: "https://static.vecteezy.com/system/resources/previews/009/378/067/non_2x/cute-cartoon-dinosaur-character-free-png.png"
                            }
                        ],
                    },
                    size: {
                        value: { min: 1, max: 50 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};