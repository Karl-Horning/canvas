/**
 * @fileoverview Search index for the site. Add one import per page when using
 * this repo as a template for a new documentation project.
 */

import { meta as accessibilityHelpers } from "@/app/accessibility-helpers/meta";
import { meta as additionalExamples } from "@/app/additional-examples/meta";
import { meta as alerts } from "@/app/alerts/meta";
import { meta as borders } from "@/app/borders/meta";
import { meta as buttons } from "@/app/buttons/meta";
import { meta as coloursInCanvas } from "@/app/colours-in-canvas/meta";
import { meta as draggableResizableAndSortableContent } from "@/app/draggable-resizable-and-sortable-content/meta";
import { meta as embeddingExternalMediaInCanvas } from "@/app/embedding-external-media-in-canvas/meta";
import { meta as flashMessages } from "@/app/flash-messages/meta";
import { meta as frequentlyAskedQuestions } from "@/app/frequently-asked-questions/meta";
import { meta as fullLegacyIconsReference } from "@/app/full-legacy-icons-reference/meta";
import { meta as grid } from "@/app/grid/meta";
import { meta as introduction } from "@/app/introduction/meta";
import { meta as legacyIcons } from "@/app/legacy-icons/meta";
import { meta as lists } from "@/app/lists/meta";
import { meta as popoversDialogsAndTooltips } from "@/app/popovers-dialogs-and-tooltips/meta";
import { meta as progressAndStatusIndicators } from "@/app/progress-and-status-indicators/meta";
import { meta as spacing } from "@/app/spacing/meta";
import { meta as tables } from "@/app/tables/meta";
import { meta as tabs } from "@/app/tabs/meta";
import { meta as typography } from "@/app/typography/meta";
import { meta as whatCanvasRemovesAndModifies } from "@/app/what-canvas-removes-and-modifies/meta";

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
