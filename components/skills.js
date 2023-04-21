import Head from 'next/head';
import Card from "./card";
import { certifications, languages, frameworks, technologies } from "./constants";
import utilStyles from '../styles/utils.module.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import SquareIcon from '@mui/icons-material/Square';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#0047AB',
    },
    '& .MuiRating-iconEmpty': {
      color: '#0047AB',
    },
  });


export default function skills(){
    return (
        <>
        <Head>
            <title>Skills</title>
        </Head>
        <section className={utilStyles.headingMd}>
        <h2>Skills</h2>
            <div className={utilStyles.gridContainer}>
                <section>
                    <h3>Languages</h3>
                    {languages.map((skill)=>
                        <>
                        <Typography component="legend" color="white">{skill.name}</Typography>
                        <StyledRating
                            name="customized-color"
                            value={skill.rating}
                            icon={<SquareIcon fontSize="inherit" />}
                            emptyIcon={<CropSquareIcon fontSize="inherit" />}
                            readOnly 
                            max={10}
                        />
                        </>
                    )}
                </section>
                <section>
                    <h3>Frameworks</h3>
                    {frameworks.map((skill)=>
                        <>
                        <Typography component="legend" color="white">{skill.name}</Typography>
                        <StyledRating
                            name="customized-color"
                            value={skill.rating}
                            icon={<SquareIcon fontSize="inherit" />}
                            emptyIcon={<CropSquareIcon fontSize="inherit" />}
                            readOnly 
                            max={10}
                        />
                        </>
                    )}
                </section>
                <section>
                    <h3>Technologies</h3>
                    {technologies.map((skill)=>
                        <>
                        <Typography component="legend" color="white">{skill.name}</Typography>
                        <StyledRating
                            name="customized-color"
                            value={skill.rating}
                            icon={<SquareIcon fontSize="inherit" />}
                            emptyIcon={<CropSquareIcon fontSize="inherit" />}
                            readOnly 
                            max={10}
                        />
                        </>
                    )}
                </section>
            </div>
        </section>
        <section>
            <h2>Certifications</h2>
            <div className={utilStyles.gridContainer}>
                {certifications.map((item) => 
                        <Card 
                            title={item.name} 
                            description={item.date}
                            img={item.img}
                            width={250}
                            >
                        </Card>
                )}
            </div>
        </section>
        </>
    );
}