package com.stock.web.hr;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.stock.web.bugs.Bugs;
import com.stock.web.cgv.Cgv;
import com.stock.web.naver.Naver;

@Repository
public interface HrMapper {

	public void insertBugsRank(Bugs t);
	public void insertCgvRank(Cgv t);
	public void insertNaver(Naver t);

}
