import React from "react";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import { PageContent } from "../../component/PageContent";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { TranslatedText } from "../../component/TranslatedText";

export const HomePage: React.FC = () => {
    return (
        <PageContent>
            <CenterContainer>
                <ProfileContainer>
                    <img src='https://i.ibb.co/D9wwQhr/25488303-1673123742708645-710471774478324921-o.jpg' alt='' width={400} height={400} />
                    <ProfileTextContainer>
                        <div>
                            <Title>João Pinto</Title>
                            <ProfileText>
                                <TranslatedText id='profile.title' />
                            </ProfileText>
                            <br />
                            <ProfileText>
                                <TranslatedText id='profile.text' bold={{ color: colors.brightMain, fontWeight: 600 }} />
                            </ProfileText>
                            <br />
                            <ProfileText>
                                <CB>
                                    <AiOutlineMail />
                                </CB>
                                : jpinto0017@gmail.com
                            </ProfileText>
                            <ProfileText>
                                <CB>
                                    <AiOutlinePhone />
                                </CB>
                                : +351 919 666 511
                            </ProfileText>
                        </div>
                    </ProfileTextContainer>
                </ProfileContainer>
            </CenterContainer>
        </PageContent>
    );
};

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    background: ${colors.mainGrey};
`;

const ProfileTextContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    justify-content: center;
`;

const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Title = styled.p`
    font-size: 3em;
    margin: 0;
    font-weight: 600;
    color: ${colors.brightMain};
`;

const ProfileText = styled.p`
    font-size: 1.2em;
    margin: 0;
    color: ${colors.contrastGrey};
`;

const CB = styled.label`
    color: ${colors.brightMain};
    font-weight: 600;
`;
