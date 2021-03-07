import React from "react";
import { colors } from "../../assets/colors";
import { PageContent } from "../../component/PageContent";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { TranslatedText } from "../../component/TranslatedText";
import {
    AboutContainer,
    BlockContainer,
    CB,
    CenitImage,
    CenterContainer,
    BlackContainer,
    IPTImage,
    ProfileContainer,
    ProfileText,
    ProfileTextContainer,
    Title,
    WhoText,
    WhiteContainer,
} from "./HomeStyles";

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
                <WhoText>
                    <BlockContainer style={{ flexDirection: "column", justifyContent: "center" }}>
                        <AboutContainer>
                            <h2>
                                <TranslatedText id='profile.about.title' />
                            </h2>
                            <p>
                                <TranslatedText id='profile.about.text' />
                            </p>
                        </AboutContainer>
                    </BlockContainer>
                    <BlockContainer>
                        <BlackContainer>
                            <h2>
                                <TranslatedText id='profile.edu.title' />
                            </h2>
                            <p>
                                <TranslatedText id='profile.edu.text' bold={{ color: colors.brightMain, fontWeight: 600 }} />
                            </p>
                        </BlackContainer>
                        <div>
                            <IPTImage>
                                <label>
                                    <TranslatedText id='general.photosource' />: mediatejo.net
                                </label>
                            </IPTImage>
                        </div>
                    </BlockContainer>
                    {/* <BlockContainer>
                        <div>
                            <CenitImage>
                                <label>Photo by: otemplario.pt</label>
                            </CenitImage>
                        </div>
                        <WhiteContainer>
                            <h2>Softinsa</h2>
                            <p>
                                I started working for <CB>Softinsa</CB>
                            </p>
                        </WhiteContainer>
                    </BlockContainer> */}
                </WhoText>
            </CenterContainer>
        </PageContent>
    );
};
