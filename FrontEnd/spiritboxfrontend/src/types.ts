export interface Post {
    attributes: {
        title: string;
        content: string;
        author: {
            data: {
                attributes: {
                    firstname: string;
                    lastname: string;
                }
            }
        }
        picture: {
            data: {
                attributes: {
                    url:  string;
                }
            }
        }
    }
}

export interface Album {
    attributes: {
        title: string;
        cover: {
            data: {
                attributes: {
                    url: string;
                }
            }
        };
        songs: {
            data: {
                attributes: {
                    title: string;
                    length: string;
                    feature: string ;
                    releasedate: string;
                }
            }[]
        }
    }
}

export interface Song {
    
        attributes: {
            title: string;
            length: string;
            feature: string;
            releasedate: string;
        }
}

export interface BandMember {
    attributes: {
        Name: string;
        Bio: string;
        picture: {
            data: {
                attributes: {
                    url: string;
                }
            }
        }
    }
}
