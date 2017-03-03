/**
 * Main Page class
 */
export class GlobalPage {

    /**
     * Message Content for popup box
     */
    public messageContent: string;

    /**
     * Message Title for popup box
     */
    public messageTitle: string;

    /**
     * Set message
     * @param title
     * @param content
     */
    protected setMessage(title: string, content: string) {
        this.messageContent = content;
        this.messageTitle = title;
    }
}