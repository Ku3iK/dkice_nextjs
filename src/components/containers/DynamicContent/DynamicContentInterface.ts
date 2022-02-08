import { IconWithListTileInterface } from "@components/Tiles/IconWithListTile/IconWithListTileInterface";

export interface DynamicContentInterface {
    classNames?: string;
    tilesContainer: {
        language: string;
        sectionTitle: string;
        tiles: Array<IconWithListTileInterface>;
    }
}