import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";
import Image from "next/image";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock: FC<VideoBlockProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video">
        {/* Masks */}
        {/* First mask - Lime background, largest */}
        <div
          className={clsx(
            "absolute inset-0",
            "mask-video",
            "bg-brand-lime",
            "-translate-x-[2%] sm:-translate-x-[3%] md:-translate-x-[3%]",
            "-translate-y-[4%] sm:-translate-y-[5%] md:-translate-y-[3%]",
            "scale-[1.02]"
          )}
        ></div>

        {/* Second mask - White, medium size */}
        <div
          className={clsx(
            "absolute inset-0",
            "mask-video",
            "bg-blue-700 opacity-80",
            "-translate-x-[1%] sm:-translate-x-[2%] md:-translate-x-[2%]",
            "-translate-y-[2%] sm:-translate-y-[3%] md:-translate-y-[2.4%]",
            "scale-[1.015]"
          )}
        ></div>

        {/* Third mask - White, smallest */}
        <div
          className={clsx(
            "absolute inset-0",
            "mask-video",
            "bg-white",
            "-translate-x-[0.5%] sm:-translate-x-[1%] md:-translate-x-[1%]",
            "-translate-y-[1%] sm:-translate-y-[2%] md:-translate-y-[2%]",
            "scale-[1.01]"
          )}
        ></div>

        {/* Video */}
        <div className={clsx("mask-video", "relative h-full")}>
          {/* with this isFilled we are making sure that video player is only shown if there is a video in in the prismic field */}
          {isFilled.keyText(slice.primary.youtube_video_id) ? (
            <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
          ) : null}

          {/* Texture overlay */}
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50" // Remove w-full h-full
          />
        </div>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
