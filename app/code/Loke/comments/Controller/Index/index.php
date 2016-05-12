<?php
namespace Loke\comments\Controller\comments;

class Index extends \Magento\Framework\App\Action\Action {
    /** @var  \Magento\Framework\View\Result\Page */
    protected $resultPageFactory;
    /**      * @param \Magento\Framework\App\Action\Context $context      */
    public function __construct(\Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $resultPageFactory)     {
        $this->resultPageFactory = $resultPageFactory;
        parent::__construct($context);
    }

    /**
     *
     * Page
     * @return \Magento\Framework\View\Result\PageFactory
     */
    public function execute()
    {
    	$resultPage = $this->resultPageFactory->create();
    	$resultPage->getConfig()->getTitle()->prepend(__('Loke comments'));
    	return $resultPage;
    }
}
