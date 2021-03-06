package com.stock.web.aop;

import java.util.Arrays;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.stock.web.pxy.Trunk;

@RestController
@Transactional
@RequestMapping("/txctrls")
public class TxController {
	
	private static final Logger logger = LoggerFactory.getLogger(TxController.class);
	
	@Autowired TxService txService;
	@Autowired Trunk<String> trunk;
	
	@GetMapping("/bugs")
	public Map<?,?> makeBugs(){
		int bugsCount = txService.writeBugs();
		trunk.put(Arrays.asList("bugsCount"),Arrays.asList());
		return trunk.get();
	}
	
	@GetMapping("/bugs")
	public Map<?,?> makeCgv(){
		int cgvCount = txService.writeCgv();
		trunk.put(Arrays.asList("cgvCount"),Arrays.asList());
		return trunk.get();
	}
	
	@GetMapping("/bugs")
	public Map<?,?> makeNaver(){
		int naverCount = txService.writeNaver();
		trunk.put(Arrays.asList("naverCount"),Arrays.asList());
		return trunk.get();
	}
}
