import styled, { css } from 'styled-components';

export const BorderBottom = css`
   border-bottom: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-bottom-width: 1px; 
`;

export const BorderTop = css`
border-top: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-top-width: 1px; 
`;

export const BorderLeft = css`
border-left: 1px solid #EDEDED; -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; border-width: 0; border-left-width: 1px; 
`;

export const BotderRight = css`
 border-right: 1px solid #EDEDED; 
 -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; 
 border-image: url(data:image/gif;base64,R0lGODlhBQAFAPABANra2v///yH5BAUHAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch; 
 border-width: 0; 
 border-right-width: 1px; 
`;


export const UlBorderBottom = styled.ul`
	${BorderBottom}
`;

export const LiBorderBottom = styled.li`
	${BorderBottom}
`;

export const DivBorderBottom = styled.div`
	${BorderBottom}
`;

export const DivBorderRight = styled.div`
	${BotderRight}
`;

