import React from 'react'
import { Row } from 'react-bootstrap'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiReact, DiTrello, DiVisualstudio } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'
import { BsFiletypeSass, BsWordpress } from 'react-icons/bs'
import { SiBootstrap, SiNetlify, SiPostman, SiWebpack } from 'react-icons/si'
import { SkillContainer, SkillSquare } from '../../../components/styled-components/MainStyles'

const Skills = () => {
  return (
    <>
     <Row className='mt-5'>
         <h2 className='text-center mb-5'>SKILLS</h2> 
         <SkillContainer>
                <SkillSquare>
                    <AiFillHtml5 style={{ color: '#E54D26' }} />
                    <p>HTML</p>
                </SkillSquare>
                <SkillSquare>
                    <DiCss3 style={{ color: '#2965F1' }} />
                    <p>CSS</p>
                </SkillSquare>
                <SkillSquare>
                    <TbBrandJavascript style={{ color: '#F7DF1E' }} />
                    <p>JavaScript</p>
                </SkillSquare>
                <SkillSquare>
                    <DiReact style={{ color: '#61DAFB' }} />
                    <p>React</p>
                </SkillSquare>
                <SkillSquare>
                    <AiFillGithub style={{ color: '#181717' }} />
                    <p>GitHub</p>
                </SkillSquare>
                <SkillSquare>
                    <BsWordpress style={{ color: '#21759B' }} />
                    <p>Wordpress</p>
                </SkillSquare>
                <SkillSquare>
                    <SiBootstrap style={{ color: '#7952B3' }} />
                    <p>Bootstrap</p>
                </SkillSquare>
            
                <SkillSquare>
                    <DiVisualstudio style={{ color: '#007ACC' }} />
                    <p>VSCode</p>
                </SkillSquare>
                <SkillSquare>
                    <FiFigma style={{ color: '#F24E1E' }} />
                    <p>Figma</p>
                </SkillSquare>
                <SkillSquare>
                    <DiTrello style={{ color: '#0079BF' }} />
                    <p>Trello</p>
                </SkillSquare>
                <SkillSquare>
                    <BsFiletypeSass style={{ color: '#CC6699' }}  />
                    <p>SASS</p>
                </SkillSquare>
                <SkillSquare>
                    <SiPostman style={{ color: '#FF6C37' }} />
                    <p>Postman</p>
                </SkillSquare>
                <SkillSquare>
                    <SiNetlify style={{ color: '#00C7B7' }} />
                    <p>Netlify</p>
                </SkillSquare>
                <SkillSquare>
                    <SiWebpack style={{ color: '#8DD6F9' }} />
                    <p>Webpack</p>
                </SkillSquare>
         </SkillContainer>
     </Row>
    </>
  )
}

export default Skills
