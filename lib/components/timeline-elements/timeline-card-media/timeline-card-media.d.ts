import React from "react";
import { Media, MediaState } from "../../../models/TimelineItemMedia";
import { TimelineMode } from "../../../models/TimelineModel";
import { Theme } from "../../../models/TimelineTreeModel";
interface CardMediaModel {
    active?: boolean;
    media: Media;
    id?: string;
    mode?: TimelineMode;
    onMediaStateChange: (state: MediaState) => void;
    theme?: Theme;
    title?: string;
    content: string;
    slideshowActive?: boolean;
}
declare const CardMedia: React.FunctionComponent<CardMediaModel>;
export default CardMedia;
