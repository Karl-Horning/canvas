/**
 * @fileoverview Search index for the site. Add one import per page when using
 * this repo as a template for a new documentation project.
 */

import { meta as accessibilityHelpers } from "@/app/accessibility-helpers/meta";
import { meta as additionalExamples } from "@/app/additional-examples";
import { meta as alerts } from "@/app/alerts";
import { meta as borders } from "@/app/borders";
import { meta as buttons } from "@/app/buttons";
import { meta as coloursInCanvas } from "@/app/colours-in-canvas";
import { meta as draggableResizableAndSortableContent } from "@/app/draggable-resizable-and-sortable-content";
import { meta as embeddingExternalMediaInCanvas } from "@/app/embedding-external-media-in-canvas";
import { meta as flashMessages } from "@/app/flash-messages";
import { meta as frequentlyAskedQuestions } from "@/app/frequently-asked-questions";
import { meta as fullLegacyIconsReference } from "@/app/full-legacy-icons-reference";
import { meta as grid } from "@/app/grid";
import { meta as introduction } from "@/app/introduction";
import { meta as legacyIcons } from "@/app/legacy-icons";
import { meta as lists } from "@/app/lists";
import { meta as popoversDialogsAndTooltips } from "@/app/popovers-dialogs-and-tooltips";
import { meta as progressAndStatusIndicators } from "@/app/progress-and-status-indicators";
import { meta as spacing } from "@/app/spacing";
import { meta as tables } from "@/app/tables";
import { meta as tabs } from "@/app/tabs";
import { meta as typography } from "@/app/typography";
import { meta as whatCanvasRemovesAndModifies } from "@/app/what-canvas-removes-and-modifies";

export interface SearchEntry {
    title: string;
    description: string;
    content: string;
    keywords: string[];
    slug: string;
}

export const searchIndex: SearchEntry[] = [
    accessibilityHelpers,
    additionalExamples,
    alerts,
    borders,
    buttons,
    coloursInCanvas,
    draggableResizableAndSortableContent,
    embeddingExternalMediaInCanvas,
    flashMessages,
    frequentlyAskedQuestions,
    fullLegacyIconsReference,
    grid,
    introduction,
    legacyIcons,
    lists,
    popoversDialogsAndTooltips,
    progressAndStatusIndicators,
    spacing,
    tables,
    tabs,
    typography,
    whatCanvasRemovesAndModifies,
];
